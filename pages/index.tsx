import { Button, Card } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function HomePage() {

  const { setTheme } = useTheme();
  return (
    <>      
        <Button 
        size='sm' 
        color='primary'
        onClick={() => setTheme('light')}
        >Home aaaaaaaaaaa</Button>
        <Button 
        size='lg' 
        color='secondary'
        onClick={() => setTheme('dark')}
        >Home bbbbbbbbbbb</Button>
    </>
  )
}
