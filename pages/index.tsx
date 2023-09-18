import { MainLayout } from "@/components/layouts";
import { Button, Card } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { useTheme } from "next-themes";

interface HomePageProps {
  getLayout: (page: JSX.Element) => JSX.Element
}

const HomePage: HomePageProps = (props: {}) => {

  console.log(props)

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

interface StaticProps {
  props: {
    [key: string]: any;
  }
}

export const getStaticProps: GetStaticProps = async (ctx): Promise<StaticProps> => {

  console.log('hola mundo')

  return {
    props: {
      data: null
    }
  }
}

export default HomePage