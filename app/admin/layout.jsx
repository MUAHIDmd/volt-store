import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "VoltStore. - Admin",
    description: "VoltStore. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
