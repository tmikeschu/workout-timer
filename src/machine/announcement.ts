import { Machine } from "xstate";

const AnnouncementMachine = Machine({
  id: "AnnouncementMachine",
  initial: "speaking",
  context: {
    message: "",
  },
  states: {
    speaking: {
      invoke: {
        id: "announcer",
        src: (context) => (cb): (() => void) => {
          const speakable = new SpeechSynthesisUtterance();
          Object.assign(speakable, {
            onend: () => {
              cb("SPOKEN");
            },
            text: context.message,
          } as Partial<SpeechSynthesisUtterance>);
          window.speechSynthesis.speak(speakable);
          return (): void => {
            window.speechSynthesis.cancel();
          };
        },
      },
      on: {
        SPOKEN: "done",
      },
    },
    done: {
      type: "final",
    },
  },
});

export type AnnouncementMachine = typeof AnnouncementMachine;

export default AnnouncementMachine;
