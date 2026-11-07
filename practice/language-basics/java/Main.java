public class Main {
    static int[] summarize(int[] amounts) {
        int count = 0;
        int total = 0;
        for (int amount : amounts) {
            if (amount >= 0) {
                count++;
                total += amount;
            }
        }
        return new int[]{count, total};
    }

    public static void main(String[] args) {
        int[] result = summarize(new int[]{12, -3, 0, 18});
        System.out.println("count=" + result[0] + " total=" + result[1]);
    }
}
