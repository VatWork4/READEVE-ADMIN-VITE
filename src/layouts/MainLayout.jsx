import SideBarAdmin from "../components/SidebarMenu";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <SideBarAdmin />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
    </div>
  );
}
