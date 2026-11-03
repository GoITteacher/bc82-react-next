import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../services/taskService";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const taskMutation = useMutation({
    mutationKey: ["create-task"],
    mutationFn: (value: string) => addTask({ title: value }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return taskMutation.mutate;
};
