// Simple audio controller
export const audioController = {
  forceStopAllAudio: () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  },
}
