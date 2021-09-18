import supabase from "../../../utils/supabase";
export default async function createClassroomAPI(req, res) {
  if (req.method == "POST") {
    const { data, error } = await supabase.from("classrooms").insert([
      {
        user_id: req.query.user_id,
        name: req.query.name,
        teacher_name: req.query.teacher_name,
        students: [
          {
            name: "12",
          },
          {
            name: "13",
          },
        ],
        subject: req.query.subject,
        level: req.query.level,
      },
    ]);
    if (!error) {
      res.status(200).json({ data });
    } else {
      res.status(400).json(error);
    }
  }
}
