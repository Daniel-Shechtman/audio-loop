let idCounter = 0;

let randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const SongList = [
  {
    songId: ++idCounter,
    path: "/songs/_tambourine_shake_higher.mp3",
    title: "|Tambourine~Shake|",
    backGroundColor: "#feda75",
  },
  {
    songId: ++idCounter,
    path: "/songs/ALL.TRACK.mp3",
    title: "|All~Sounds~Combined|",
    backGroundColor: "#fa7e1e",
  },
  {
    songId: ++idCounter,
    path: "/songs/B.VOC.mp3",
    title: "|B~Vocal~Sound|",
    backGroundColor: "#d62976",
  },
  {
    songId: ++idCounter,
    path: "/songs/DRUMS.mp3",
    title: "|Drums~Sound|",
    backGroundColor: "#962fbf",
  },
  {
    songId: ++idCounter,
    path: "/songs/HE.HE.VOC.mp3",
    title: "|He~He~Vocal~Sound|",
    backGroundColor: "linear-gradient(to right, #5c258d, #4389a2)",
  },
  {
    songId: ++idCounter,
    path: "/songs/HIGH.VOC.mp3",
    title: "|High~Vocal~Sound|",
    backGroundColor: "linear-gradient(to right, #134e5e, #71b280)",
  },
  {
    songId: ++idCounter,
    path: "/songs/JIBRISH.mp3",
    title: "|Jibrish~Sound|",
    backGroundColor: "linear-gradient(to right, #085078, #85d8ce)",
  },
  {
    songId: ++idCounter,
    path: "/songs/LEAD.1.mp3",
    title: "|Lead~Sound|",
    backGroundColor: "linear-gradient(to right, #4776e6, #8e54e9)",
  },
  {
    songId: ++idCounter,
    path: "/songs/UUHO.VOC.mp3",
    title: "|Uho~Vocal~Sound|",
    backGroundColor: "linear-gradient(to right, #dd5e89, #f7bb97)",
  },
];
