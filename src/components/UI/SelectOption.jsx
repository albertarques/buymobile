'use client'
export default function SelectOption({options, label, id}) {
  return (
    <div className="mr-2 my-1">
      <label className="mt-2 mr-4 w-full" htmlFor={id}>{label}</label>
      <select id={id} className=" font-sans w-full bg-gray-200 rounded-xl px-4 py-2 text-gray-700 my-2 md:mt-0">
        {options.map((option) => (
          <option key={option.name} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
