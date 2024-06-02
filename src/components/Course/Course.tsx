import { memo } from "react";
import { ICourses } from "../../interfaces/data";
import styles from "./Course.module.scss";

interface Props {
    course: ICourses;
}

const Course: React.FC<Props> = memo(({ course }) => {
    return (
        <li className={styles.course}>
            <div
                className={styles.course__imgContainer}
                style={{ backgroundColor: course.bgColor }}
            >
                <img
                    className={styles.course__img}
                    src={course.image}
                    alt={course.name}
                />
            </div>
            <p className={styles.course__name}>{course.name}</p>
        </li>
    );
});

export default Course;
