import supabase from "../../../utils/supabase";
export default async function createClassroomAPI(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("classrooms")
      .select()
      .eq("user_id", req.query.user_id)
      .order("created_at", { ascending: false });
    if (!error) {
      res.status(200).json({ data });
    } else {
      res.status(400).json(error);
    }
  }
}
