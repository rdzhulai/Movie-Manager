interface Props {
    title: string;
    children: React.ReactNode;
}

const ActorSelectorList = ({ title, children }: Props) => {
    return (
        <div className='w-1/2 m-2'>
            <div className='text-lg text-center font-bold'>{title}</div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ActorSelectorList