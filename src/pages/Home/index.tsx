import { useState } from "react";

import Header from "../../components/Header";

import Cards, { Balance } from "../../components/Cards";
import TransactionList, { Transaction } from "../../components/TransactionList";

import { Container } from "./styles";

function Home() {
  const [balance, setBalance] = useState<Balance>({
    income: 12.12,
    outcome: 6,
    total: 6.12,
  });

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      category: { title: "Trabalho" },
      title: "Venda",
      type: "income",
      value: 12.12,
      created_at: "2021-02-03T00:00:00",
    },
    {
      id: "2",
      category: { title: "Comida" },
      title: "Lanche",
      type: "outcome",
      value: 6,
      created_at: "2021-02-21T00:00:00",
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <Cards balance={balance} />
        <TransactionList transactions={transactions} />
      </Container>
    </>
  );
}

export default Home;
