export type ValidShirtSize = "" | "S" | "M" | "L" | "XL"

interface ProfileDTO {
  title: string
  firstName: string
  lastName: string
  nickName: string
  birthDate: string
  phoneNumber: string
  religion: string
  educationLevel: string
  educationProgram: string
  educationalInstitution: string
  educationalInstitutionProvince: string
  bloodGroup: string
  illness: string
  foodRestriction: string
  allergicDrug: string
  illnessDrug: string
  mailRecipientName: string
  mailAddress: string
  mailTumbol: string
  mailAmphoe: string
  mailProvince: string
  mailPostalCode: string
  mobileTelephone: string
  landlineTelephone: string | null
  contactEmail: null
  contactFacebook: string
  contactLineApp: string
  parentName: string
  parentTelephone: string
  parentRelationship: string
  shirtSize?: ValidShirtSize
}

export default ProfileDTO
