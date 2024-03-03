export const load = () => {
    return {
        streams: {courses: fetch("http://localhost:5173/courses")
        .then((r) => r.json())}
    }
}