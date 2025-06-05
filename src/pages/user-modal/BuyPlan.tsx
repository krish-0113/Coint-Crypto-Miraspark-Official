import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessModal({
  successModalOpen,
  setSuccessModalOpen,
  message = "Your plan has been successfully purchased!",
  onConfirm,
}: {
  successModalOpen: boolean;
  setSuccessModalOpen: (val: boolean) => void;
  message?: string;
  onConfirm?: () => void;
}) {
  return (
    <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
      <DialogContent className="sm:max-w-xl h-72 md:h-80 bg-black/50 border border-green-400/60 rounded-2xl shadow-xl backdrop-blur-2xl transition-all duration-300 ease-in-out"
>
        <DialogHeader>
          <div className="flex flex-col items-center justify-center gap-4">
            <DialogTitle className="text-center text-white text-2xl md:text-3xl">
              Purchase Successful
            </DialogTitle>
            <FiCheckCircle className="text-green-400 text-5xl md:text-6xl" />
            <p className="text-center text-gray-200 max-w-md">{message}</p>
          </div>
        </DialogHeader>

        <div className="flex justify-center gap-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-2 min-w-28"
            >
              Close
            </Button>
          </DialogClose>
          {onConfirm && (
            <Button
              type="button"
              variant="outline"
              className="px-4 py-2 min-w-28 bg-green-500 text-white hover:bg-green-700"
              onClick={() => {
                onConfirm();
                setSuccessModalOpen(false);
              }}
            >
              Continue
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
