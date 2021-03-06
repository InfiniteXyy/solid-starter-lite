export default function IndexPage() {
  const [input, setInput] = createSignal('')
  const navigate = useNavigate()
  return (
    <>
      <input
        class="border-dark-500 dark:border-light-600 my-2 border-b-2 bg-transparent transition focus:border-blue-400 focus:outline-none"
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        placeholder="Your name"
        value={input()}
      />
      <button
        class="flex items-center rounded bg-blue-100 py-1 px-4 font-bold transition disabled:opacity-40 dark:bg-blue-600 print:hidden"
        disabled={!input()}
        onClick={() => navigate(`/hi/${input()}`)}
        type="button"
      >
        <span>Go</span>
        <div class="i-carbon-chevron-right ml-1 print:hidden" />
      </button>
    </>
  )
}
