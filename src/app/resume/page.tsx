mkdir -p src/app/resume
cat > src/app/resume/page.tsx <<'TSX'
'use client';
import ResumeOnline from "./ResumeOnline";
export default function ResumePage() { return <ResumeOnline />; }
TSX
