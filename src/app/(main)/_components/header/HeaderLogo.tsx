import { NomNomLogo } from "@/components/icons";

export const HeaderLogo = ({
  textColor = ["white", "#EF4444", "white"],
}: {
  textColor?: string[];
}) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <NomNomLogo width={36} height={36} />

      <div>
        <div className="flex text-xl font-semibold text-black">
          <p style={{ color: textColor[0] }}>Zolo</p>
          <p style={{ color: textColor[1] }}>Nym</p>
        </div>
        <p style={{ color: textColor[2] }} className="text-xs">
          Swift delivery
        </p>
      </div>
    </div>
  );
};
