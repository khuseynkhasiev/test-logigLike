import { memo } from "react";
import { ICourses } from "../../interfaces/data";
import Course from "../Course/Course";
import styles from "./Courses.module.scss";

interface Props {
    courses?: ICourses[];
}

const Courses: React.FC<Props> = memo(({ courses }) => {
    return (
        <main className={styles.courses}>
            <ul className={styles.courses__list}>
                {courses?.map((course) => (
                    <Course course={course} key={course.id} />
                ))}
            </ul>
        </main>
    );
});

export default Courses;
