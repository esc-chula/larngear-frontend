import QuestionModel from "../models/question.model"
const defaultLinkProps = `target="_blank" rel="noopener noreferrer" class="no-underline" style="color: #941014;"`

const questionsSection1Constant: Array<QuestionModel> = [
  {
    question: "แนะนำตัวเองแบบปัง ๆ ให้พี่รู้จักหน่อย",
    type: "multiline"
  },
  {
    question:
      'เรียงลำดับจุดมุ่งหมายการเข้าร่วมค่ายจากมากมาน้อย 5 อันดับ (1 คือมากสุด 5 คือน้อยสุด) <span style="color: red;">โดยห้ามระบุอันดับซ้ำกันและต้องระบุให้ครบทุกอันดับ</span>',
    type: "ranking",
    contents: [
      { label: "เพื่อใช้เวลาว่างให้เกิดประโยชน์" },
      { label: "หาประสบการณ์ในการเข้าค่าย" },
      { label: "เพื่อเป็นแนวทางในการตัดสินใจต่อ" },
      { label: "ผู้ปกครองต้องการให้เข้าร่วมกิจกรรม" },
      { label: "สมัครกิจกรรมตามเพื่อน" }
    ]
  },
  {
    question: "ทำไมน้องถึงอยากเข้าค่ายลานเกียร์ และคาดหวังอะไรจากค่ายนี้ (ไม่เกิน 150 คำ)",
    type: "multiline"
  },
  {
    question: "น้องเคยเข้าร่วมกิจกรรมวิชาการที่เกี่ยวข้องกับสาขาวิศวกรรมศาสตร์มาบ้างหรือไม่ หากเคย ให้ระบุชื่อกิจกรรมและหน่วยงานที่จัดโดยละเอียด",
    type: "multiline"
  },
  {
    question: "น้องทราบข่าวค่ายลานเกียร์ครั้งที่ 23 จากที่ใด/ผู้ใด (เลือกได้มากกว่า 1 ข้อ)",
    type: "checkbox",
    contents: [
      { label: "Facebook: LarnGear Camp" },
      { label: "Instagram: larngear_camp" },
      { label: "Website (โปรดระบุ)", textfield: true },
      { label: "คนในครอบครัว" },
      { label: "ครู/อาจารย์" },
      { label: "รุ่นพี่สุดน่ารัก😍" },
      { label: "เพื่อน" },
      { label: "อื่นๆ (โปรดระบุ)", textfield: true }
    ]
  },
  {
    question:
      "ให้น้องระบุคณะที่อยากศึกษาต่อในระดับอุดมศึกษา (รวมทั้งหมดเป็น 100%) พร้อมเหตุประกอบว่าใดจึงเป็นเช่นนั้น (ไม่เกิน 150 คำ) </br></br> (ตัวอย่าง) </br> คณะ A 40% คณะ B 40% คณะ C 20% </br> เนื่องจากผมยังลังเลอยู่ระหว่างสามคณะนี้ เลยให้คะแนนทั้ง 3 คณะใกล้ ๆ กัน แต่ที่ให้ </br> B มากกว่า A และ C เพราะ… </br>",
    type: "multiline"
  },
  {
    question: "ทำไมน้องถึงสนใจในอาชีพวิศวกร",
    type: "multiline"
  },
  {
    question: `ถ้าเลือกได้น้อง ๆ อยากเข้าศึกษาต่อสาขาวิชาไหนในคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เป็นพิเศษ ตอบอย่างน้อย 2 เหตุผล <span><a href='https://www.eng.chula.ac.th/th/academics/bachelor' ${defaultLinkProps}>สามารถดูรายละเอียดแต่ละสาขาวิชาได้ที่นี่</a></span>`,
    type: "multiline"
  },
  {
    question: "ก่อนจะไปกันต่อ มาแต่งวลีกันสักนิด “.................................. ทีนี้ก็ลำบาก ก็ว้าวุ่นเลย”",
    type: "multiline"
  }
]

export { questionsSection1Constant }
