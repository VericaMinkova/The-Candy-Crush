class CandyCrush {
  howLong(times, position) {
    let currentTime = 0;
    let crush = times[position];
    let left = position - 1;
    let right = position + 1;

    while (times[left] > currentTime && times[left] > times[left + 1]) {
      crush = times[left];
      left--;
      currentTime++;
    }

    while (times[right] > currentTime && times[right] > times[right - 1]) {
      crush = times[right];
      right++;
      currentTime++;
    }

    console.log(`🍬 Candy is alive for ${crush} seconds.`);
    return crush;
  }
}

const CandyCrush1 = new CandyCrush();

// Case 1
CandyCrush1.howLong([1, 2, 3, 4], 0);

// Case 2
CandyCrush1.howLong([1, 2, 10, 4], 0);

// Case 3
CandyCrush1.howLong([10, 1, 3, 4, 7], 2);

// Case 4
CandyCrush1.howLong([10, 2, 3, 4, 7], 2);

// Case 5
CandyCrush1.howLong([3, 3, 1, 3, 4, 4, 1, 3], 7);

// Case 6
CandyCrush1.howLong([1, 2, 4, 3, 4, 3, 1, 3, 3, 4], 1);

// Case 7
CandyCrush1.howLong([2, 1, 4, 4, 1, 1, 1, 1, 2, 1], 6);

// Case 8
CandyCrush1.howLong(
  [
    950, 501, 913, 2, 636, 287, 753, 5, 126, 1, 305, 2, 712, 3, 1, 5, 4, 26,
    715, 532, 2, 4, 98, 3, 296, 4, 184, 1, 154, 541, 2, 4, 2, 141, 577, 376, 67,
    3, 424, 360, 521, 5, 4, 5, 4, 886, 3, 5, 5, 334,
  ],
  28
);

// Case 9

CandyCrush1.howLong(
  [
    2, 4, 2, 4, 803, 1, 996, 855, 682, 3, 2, 5, 1, 5, 225, 3, 4, 5, 49, 189, 3,
    328, 5, 494, 863, 390, 2, 1, 810, 4, 819, 5, 4, 645, 691, 5, 279, 82, 202,
    368, 546, 1, 1, 2, 488, 4, 163, 2, 487, 486,
  ],
  12
);

// Case 10

CandyCrush1.howLong(
  [
    288, 1, 256, 327, 723, 432, 674, 196, 218, 90, 6, 563, 643, 431, 351, 948,
    546, 282, 705, 805, 864, 229, 99, 499, 865, 986, 218, 961, 434, 12, 338,
    255, 91, 797, 406, 519, 242, 329, 578, 220, 912, 866, 702, 412, 456, 430,
    702, 688, 397, 222, 792, 153, 155, 784, 957, 413, 401, 167, 76, 586, 429,
    306, 124, 498, 136, 258, 152, 752, 660, 136, 160, 378, 771, 358, 861, 296,
    658, 988, 173, 740, 350, 879, 32, 362, 597, 125, 345, 2, 193, 420, 417, 51,
    808, 195, 169, 50, 703, 505, 327, 579,
  ],
  0
);
