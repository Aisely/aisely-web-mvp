import Sidebar from './Sidebar/Sidebar';

interface ChildrenProps {
    children: any
}

export default function Layout({ children }: ChildrenProps) {
    return (
      <>
        <main>{children}</main>
      </>
    )
  }