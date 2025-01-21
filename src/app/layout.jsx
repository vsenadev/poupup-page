import React from "react";
import "@/styles/reset.css";
import "@/styles/_variables.sass";
import {GlobalStateProvider} from "@/context/globalState";

export const metadata = {
    title: "PoupUp",
    description: "PoupUp, é uma solução de gerenciamento financeiro pessoal que utiliza IA e gamificação para ajudar usuários a controlar orçamentos, evitar gastos excessivos e integrar investimentos. Oferece funcionalidades como orçamentos inteligentes, controle de despesas e integração com WhatsApp. Experimente agora e comece a melhorar sua saúde financeira!.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning={true}>
            <body>
                <GlobalStateProvider>
                    {children}
                </GlobalStateProvider>
            </body>
        </html>
    );
}
