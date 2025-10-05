import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "VoltStore. - Store Dashboard",
    description: "VoltStore. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
