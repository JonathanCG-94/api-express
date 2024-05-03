export const products = (req, res) => {
    res.status(200).json({
        succes: true,
        data: [
            {
                subjects: "Programacion",
                semestre: "7",
                hour:"20:00:pm",
                date: new Date().toDateString(),
            }
        ]
    })
}