<template>
  <div
    class="draw-card"
    ref="card"
    :class="{
      'draw-card--current': isCurrent,
      'draw-card--disabled': !isCurrent,
      'draw-card--next': isNext,
      isAnimating: isAnimating,
    }"
    :style="{ transform: transformString }"
  >
    <canvas
      id="paper-canvas"
      v-on:mousedown="onMouseDown"
      v-on:keydown="onKeyDown"
    ></canvas>
    <img :src="imageUrl" class="draw-card__image" />
  </div>
</template>

<script>
import { computed } from "vue";
import paper from "paper";

export default {
  props: {
    sampleId: {
      type: String,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      required: true,
    },
    isNext: {
      type: Boolean,
      required: true,
    },
    baseUrlTemplate: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      isDisplayed: true,
      currentPath: undefined,
      allPaths: [],
      erase: false,
      scope: null,
      tool: null,
    };
  },
  mounted() {
    this.scope = new paper.PaperScope();
    this.scope.setup("paper-canvas");
    this.scope.activate();
  },
  methods: {
    pathCreate(scope) {
      scope.activate();
      return new paper.Path({
        strokeColor: "black",
        strokeJoin: "round",
        strokeWidth: 1.5,
        // Select the path, so we can see its segment points:
        fullySelected: true,
      });
    },
    createTool(scope) {
      scope.activate();
      return new paper.Tool();
    },
    onMouseDown() {
      console.log("in onMouseDown");
      let self = this;
      this.tool = this.createTool(this.scope);
      this.tool.onMouseDown = event => {
        self.currentPath = this.pathCreate(self.scope);
        self.currentPath.add(event.point);
      };
      this.tool.onMouseDrag = event => {
        self.currentPath.add(event.point);
      };
      this.tool.onMouseUp = () => {
        self.currentPath.closed = true;
        // TODO: Verify that this is a good tolerance for simplify
        self.currentPath.simplify(10);
        self.allPaths.push(self.currentPath);
      };
    },
    onKeyDown(event) {
      if (event.key == "space") {
        this.toggleErase();

        // Prevent the key event from bubbling
        return false;
      }
    },
    toggleErase() {
      this.erase = !this.erase;
      this.currentPath.strokeColor = this.erase === true ? "red" : "black";
    },
    undo() {
      if (this.allPaths.length === 0) {
        return;
      }
      var lastPath = this.allPaths.pop();
      lastPath.remove();
      console.log(this.allPaths);
    },
  },
  setup(props) {
    const imageUrl = computed(() => {
      return props.baseUrlTemplate.replace("{0}", props.sampleId);
    });
    return { imageUrl };
  },
};
</script>

<style lang="scss" scoped>
.draw-card {
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  width: 100%;

  @include media("≥tablet") {
    width: 100%;
  }
}

.draw-card__image {
  border-radius: $border-radius-sm;
  width: 100%;

  @include media("≥tablet") {
    min-width: 100%;
  }
}

.draw-card--current {
  cursor: move;
  transform: scale(1);
  opacity: 1;
  touch-action: none;
  z-index: 2;
}

.draw-card--disabled {
  transform: scale(0.9) translatey(30px);
  opacity: 0;
  pointer-events: none;
}

.draw-card--next {
  opacity: 0.7;
}

.isAnimating {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;
}

#paper-canvas {
  width: 100% !important;
  height: 500px !important;
  display: block;
  margin: auto;
  cursor: pointer;
}
</style>
