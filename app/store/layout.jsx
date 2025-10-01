import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "VOLT STORE - Store Dashboard",
    description: "VOLT STORE - Store Dashboard",
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
