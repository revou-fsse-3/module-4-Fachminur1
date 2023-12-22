import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>Full Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Email address</label>
      <input
        required
        type="email"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Date of Birth</label>
      <input
        required
        min={1}
        type="date"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}