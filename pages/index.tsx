import { MainLayout } from "@/components/layouts";
import { Button, Card } from "@nextui-org/react";
import { useTheme } from "next-themes";

const HomePage = () => {

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

HomePage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default HomePage