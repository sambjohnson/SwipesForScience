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
      v-on:mouseup="onMouseUp"
      v-on:mousedrag="onMouseDrag"
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
    };
  },
  mounted() {
    this.scope = new paper.PaperScope();
    this.scope.setup("paper-canvas");
  },
  beforeUnmount() {},
  methods: {
    onMouseDown(event) {
      // If we produced a path before, deselect it:
      if (this.currentPath) {
        this.currentPath.selected = false;
      }

      // Create a new path and set its stroke color to black:
      this.currentPath = new paper.Path({
        segments: [event.point],
        strokeColor: "black",
        // Select the path, so we can see its segment points:
        fullySelected: true,
      });
    },
    onMouseDrag(event) {
      this.currentPath.add(event.point);
    },
    // When the mouse is released, we simplify the path:
    onMouseUp() {
      // When the mouse is released, simplify it:
      this.currentPath.closed = true;
      // TODO: Verify that this is a good tolerance for simplify
      this.currentPath.simplify(10);
      this.allPaths.push(this.currentPath);
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
