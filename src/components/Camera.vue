<template>
<div class="pa-2">
  <div
    ref="wrapper"
  >
  <v-flex lg4>
      <video
        ref="camera"
        id="preview"
        width="100%"
        height="auto"
        autoPlay
      ></video>
  </v-flex>
  </div>
  <v-layout>
  <v-flex xs6 lg2/>
      <div class="cam"
        @click="takePhoto"
      >
        <v-icon
          aria-hidden="true"
        >mdi-camera-iris</v-icon>
      </div>
  </v-layout>
</div>
</template>

<script>
export default {
  name: 'Camera',
  data() {
    return {
      smallPreview: false,
      blob: null,
      devices: [],
      constraints: {},
      isAlreadyRecorded: false,
      stream: undefined,
    };
  },
  methods: {
    takePhoto() {
    },

    handleWindowResize() {
      this.smallPreview = this.$refs.wrapper.offsetWidth < 740;
    },

    handleOnPlay() {
    },
  },

  mounted() {
    const { camera } = this.$refs;
    window.addEventListener('resize', this.handleWindowResize);
   this.constraints = { video: true };
    const gotDevices = (mediaDevices) => {
      this.devices = JSON.parse(JSON.stringify(mediaDevices)).filter(d => d.kind === 'videoinput');
    };
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream) => {
        camera.srcObject = stream;
        this.stream = stream;
        return navigator.mediaDevices.enumerateDevices();
      })
      .then(gotDevices)
      .catch((error) => {
        console.error(error);
      });
  },

  beforeDestroy() {
    const { camera } = this.$refs;
    window.removeEventListener('resize', this.handleWindowResize);
    camera.removeEventListener('play', this.handleOnPlay);
  },
};
</script>
<style>
.cam{
  text-align: center;
}
</style>