import { Grid } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function gallery() {
    const projectImage = [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
    ]

  return (
    <div className="project-wrapper pt-20">
        <div className="project-item">
         <h2 className="text-3xl text-center pb-10">S.E Villa Projesi</h2>   
        <Grid.Container gap={2} justify="center" className="lg:px-20">
            {projectImage.map((image) => {
                return (
                    <Grid xs={6} key={image}>
                        <Link href="/project">
                            <Image src={image} width={700} height={500} />
                        </Link>
                    </Grid>

                )
            })}
        </Grid.Container>
        </div>
    </div>
  )
}
