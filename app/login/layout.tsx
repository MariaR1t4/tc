import { execFile } from "child_process"

export default function LoginLayout({children,} : {children: React.ReactNode}) {
  return (
      <div>
          {children}
      </div>
  )
}
