import MainBattery from "./mainBattery";
import BackupBattery from "./backupBattery";

const Batteries = (props) => {
    const batteryAmount = props?.amount;
    if (batteryAmount === 1) {
        return (
            <group {...props} dispose={null}>
                <MainBattery />
            </group>
        )
    } else if (batteryAmount === 2) {
        return (
            <group {...props} dispose={null}>
                <MainBattery />
                <BackupBattery />
            </group>
        )
    }
};

export default Batteries;


