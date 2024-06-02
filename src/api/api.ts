const BASE_URL = "https://logiclike.com";

const getCourses = () => {
    return fetch(`${BASE_URL}/docs/courses.json`).then((res) =>
        res.ok ? res.json() : Promise.reject(res)
    );
};

export { getCourses };
