import trainer1 from "./trainer1.jpg"
import trainer1dtransform1 from "./trainer1transform1.jpg"
import trainer1dtransform2 from "./trainer2transform2.jpg"
import trainer1dtransform3 from "./trainer3transform3.jpg"
import trainer1intro from "./trainer1intro.mp4"

import physio1 from "./physio1.jpg"
import physio1therapy1 from "./physio1therapy1.jpg"
import physio1therapy2 from "./physio1therapy2.jpg"
import physio1therapy3 from "./physio1therapy3.jpg"
import physio1intro from "./physio1intro.mp4"

import chiro1 from "./chiro1.jpg"
import chiro1img1 from "./chiro1img1.jpg"
import chiro1img2 from "./chiro1img2.jpg"
import chiro1img3 from "./chiro1img3.jpg"
import chiro1intro from "./chiro1intro.mp4"



export const PERSONALDATA = [
    {
        trainerimg : trainer1,
        trainername : "John Hard",
        trainerdesc : "Your Personal Trainer",
        trainerdropimg : [trainer1dtransform1, trainer1dtransform2, trainer1dtransform3],
        trainerdetail : "Meet John Hard, a fitness enthusiast turned personal trainer. With a focus on personalized workouts and motivational coaching, John is dedicated to helping clients achieve their fitness goals. His dynamic approach blends strength training, cardio, and flexibility for a well-rounded fitness experience.",
        traineremail: "john@gmail.com",
        cost: "1000 Rs / Session",
        trainerintro : trainer1intro
    }
]

export const PHYSIODATA = [
    {
        trainerimg : physio1,
        trainername : "Smith John",
        trainerdesc : "Your Personal Trainer",
        trainerdropimg : [physio1therapy1, physio1therapy2, physio1therapy3],
        trainerdetail : "Smith John, an experienced physiotherapist, excels in crafting tailored rehabilitation programs for musculoskeletal issues. His compassionate approach and expertise in therapeutic exercises aim to enhance mobility and alleviate pain, fostering a supportive environment for clients on their path to recovery.",
        traineremail: "smith@gmail.com",
        cost: "600 Rs / Session",
        trainerintro : physio1intro
    }
]

export const CHIRODATA = [
    {
        trainerimg : chiro1,
        trainername : "Martin Ros",
        trainerdesc : "Your Personal Trainer",
        trainerdropimg : [chiro1img1, chiro1img2, chiro1img3],
        trainerdetail : "Martin Ros, a skilled chiropractor, specializes in personalized care for musculoskeletal issues. With a focus on manual techniques and patient education, he strives to improve mobility and alleviate discomfort. Martin is dedicated to creating a supportive environment, empowering clients on their journey to optimal physical well-being.",
        traineremail: "martin@gmail.com",
        cost: "2000 Rs / Session",
        trainerintro : chiro1intro
    }
]