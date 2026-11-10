import SongList from "@/components/SongList/SongList";
import { getSongs } from "@/services/songsApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["songs", ""],
    queryFn: () => getSongs(""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SongList />
    </HydrationBoundary>
  );
};

export default Page;
