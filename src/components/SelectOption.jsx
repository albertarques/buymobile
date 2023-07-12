'use client'
export default function SelectOption({options, label, id}) {
  console.log(options)
  return (
    <>
      <label className="mt-2 mr-4 w-full" htmlFor={id}>{label}</label>
      <select id={id} className="w-full bg-gray-200 rounded-xl px-4 py-2 text-gray-700 my-2 md:mt-0">
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}