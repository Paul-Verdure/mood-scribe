const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute top-0 left-0 h-full w-[200px] border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">Hello</header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
