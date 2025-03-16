function swimWorldRecord(arr) {
    
    let worldRecordSec = Number(arr[0]);
    let distanceMeters = Number(arr[1]);
    let secPerMeter = Number(arr[2]);

    let secLost =Math.trunc(distanceMeters / 15);
    let additionalSec= secLost*12.5;
    let distanceSec = distanceMeters * secPerMeter;
    let totalSec = distanceSec + additionalSec;
    if (totalSec < worldRecordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalSec.toFixed(2)} seconds.`);
    } else {
        let secNeeded = totalSec - worldRecordSec;

        console.log(`No, he failed! He was ${secNeeded.toFixed(2)} seconds slower.`);
    }

}
// swimWorldRecord(["10464",
// "1500",
// "20"]);
swimWorldRecord(["55555.67",
"3017",
"5.03"]);

