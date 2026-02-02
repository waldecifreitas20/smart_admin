export function Menu() {
    return (
        <aside className="bg-white border-t border-purple-500 px-4 fixed bottom-0 w-full shadow-top shadow-2xl">
            <nav>
                <ul className="flex justify-between leading-16">
                    <li className="hover:text-purple-500">Dashboard</li>
                    <li className="hover:text-purple-500">Colaboradores</li>
                    <li className="hover:text-purple-500">Solicitações</li>
                    <li className="hover:text-purple-500">Sair</li>
                </ul>
            </nav>
        </aside>
    );
}