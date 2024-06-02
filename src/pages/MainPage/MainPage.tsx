import { useEffect, useState, useCallback, useMemo } from "react";
import Menu from "../../components/Menu/Menu";
import Courses from "../../components/Courses/Courses";
import * as api from "../../api/api";
import { ICourses } from "../../interfaces/data";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
    const [courses, setCourses] = useState<ICourses[]>();
    const [courseTags, setCourseTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string>("Все темы");

    useEffect(() => {
        getCoursesData();
    }, []);

    const getCoursesData = async () => {
        const courses = sessionStorage.getItem("courses");
        if (courses) {
            const data = JSON.parse(courses);
            setCourses(data);
            saveTags(data);
        } else {
            const data = await api.getCourses();
            setCourses(data);
            saveTags(data);
            saveCoursesSessionStorage(data);
        }
    };

    const saveTags = (data: ICourses[]): void => {
        const tags = data.reduce((acc, item) => {
            item.tags.forEach((tag) => {
                if (!acc.includes(tag)) {
                    acc.push(tag);
                }
            });
            return acc;
        }, [] as string[]);
        setCourseTags(tags);
    };

    const saveCoursesSessionStorage = (data: ICourses[]): void => {
        sessionStorage.setItem("courses", JSON.stringify(data));
    };

    const handleClickTag = useCallback((tag: string): void => {
        setActiveTag(tag);
    }, []);

    const filteredCourses = useMemo(() => {
        if (activeTag === "Все темы") {
            return courses;
        }
        return courses?.filter((course) => course.tags.includes(activeTag));
    }, [courses, activeTag]);

    return (
        <div className={styles.main}>
            <Menu
                tags={courseTags}
                handleClickTag={handleClickTag}
                activeTag={activeTag}
            />
            <Courses courses={filteredCourses} />
        </div>
    );
};

export default MainPage;
