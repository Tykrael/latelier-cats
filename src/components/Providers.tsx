"use client";
import { PropsWithChildren, useContext, createContext, useState } from "react";

type ProvidersProps = PropsWithChildren;

type Data = {
	  catsPromise?: Promise<any[]>;
};

const defaultData: Data = {}

const CatsContext = createContext<Data>(defaultData);


export default function Providers({ children, catsPromise }: {children: React.ReactNode, catsPromise: Promise<any[]>}) {
  
  return (
	<CatsContext value={{ catsPromise: catsPromise }}>
		{children}
	</CatsContext>
  );
}

export const useData = () => useContext(CatsContext);
