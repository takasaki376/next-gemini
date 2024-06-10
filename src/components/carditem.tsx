"use client";

import { getGeminiData } from "@/actions/getGeminiData";
import { GeminiData, GeminiFormattedData, GeminiParams } from "@/types";
import { breakString } from "@/utils/format";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Spinner,
  Code,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface CardItemProps {
  params: GeminiParams;
}

export default function CardItem({ params }: CardItemProps) {
  const [data, setData] = useState<GeminiData | undefined>(undefined);
  const [formattedData, setFormattedData] = useState<
    GeminiFormattedData | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getGeminiData(params)
      .then((data) => {
        setData(data);
        const store = breakString(data.generatedText);
        setFormattedData({
          title: store[0],
          desc: store[1],
          link: store[2],
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setError("Data could not be fetched. Too many requests");
        } else {
          setError("An error occurred while fetching data");
        }
      });
  }, [params]);

  if (error) {
    return <Code color="danger">{error}</Code>;
  }

  if (!data) {
    return <Spinner color="secondary" />;
  }

  return (
    <Card
      isBlurred
      className="bg-background/60 dark:bg-default-100/50 max-w-[500px] p-4"
    >
      <CardHeader>{formattedData?.title}</CardHeader>
      <Divider />
      <CardBody>{formattedData?.desc}</CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          className="text-danger"
          href={formattedData?.link}
        >
          View news article
        </Link>
      </CardFooter>
    </Card>
  );
}
