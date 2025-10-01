import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "VOLT STORE - Admin",
    description: "VOLT STORE - Admin",
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
