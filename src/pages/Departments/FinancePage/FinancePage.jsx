import React, { useState } from "react";
import "./FinancePage.css";
import BudgetTab from "./BudgetTab";
import RevisedBudgetTab from "./RevisedBudgetTab";
import ReceiptPaymentTab from "./ReceiptPaymentTab";
import BalanceSheetTab from "./BalanceSheetTab";
import IncomeExpenditureTab from "./IncomeExpenditureTab";
import InternalAuditTab from "./InternalAuditTab";
import StatutoryAuditTab from "./StatutoryAuditTab";

const FinancePage = () => {
    const [activeTab, setActiveTab] = useState("budget");

    return (
        <section className="fncxr54_finance_page_shell uni_container">
            <div className="fncxr54_finance_inner_wrap">
                <p className="fncxr54_finance_intro_text">
                    Financial records and audit reports of Gobardanga Municipality,
                    available for public review as per transparency guidelines.
                </p>

                <div className="fncxr54_finance_tabs_row">
                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "budget" ? "fncxr54_finance_tab_btn_active" : ""
                            }`}
                        onClick={() => setActiveTab("budget")}
                    >
                        Budget
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "revisedBudget"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("revisedBudget")}
                    >
                        Revised Budget
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "receiptPayment"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("receiptPayment")}
                    >
                        Receipt & Payment
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "balanceSheet"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("balanceSheet")}
                    >
                        Balance Sheet
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "incomeExpenditure"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("incomeExpenditure")}
                    >
                        Income & Expenditure
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "internalAudit"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("internalAudit")}
                    >
                        Internal Audit
                    </button>

                    <button
                        className={`fncxr54_finance_tab_btn ${activeTab === "statutoryAudit"
                                ? "fncxr54_finance_tab_btn_active"
                                : ""
                            }`}
                        onClick={() => setActiveTab("statutoryAudit")}
                    >
                        Statutory Audit
                    </button>
                </div>

                <div className="fncxr54_finance_tab_content_area">
                    {activeTab === "budget" && <BudgetTab />}
                    {activeTab === "revisedBudget" && <RevisedBudgetTab />}
                    {activeTab === "receiptPayment" && <ReceiptPaymentTab />}
                    {activeTab === "balanceSheet" && <BalanceSheetTab />}
                    {activeTab === "incomeExpenditure" && <IncomeExpenditureTab />}
                    {activeTab === "internalAudit" && <InternalAuditTab />}
                    {activeTab === "statutoryAudit" && <StatutoryAuditTab />}
                </div>
            </div>
        </section>
    );
};

export default FinancePage;