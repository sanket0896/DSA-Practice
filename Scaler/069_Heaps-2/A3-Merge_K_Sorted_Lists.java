/**
 * Merge K Sorted Lists
 * 
Problem Description
Given a list containing head pointers of N sorted linked lists. Merge these N given sorted linked lists and return it as one sorted list.


Problem Constraints
1 <= total number of elements in given linked lists <= 100000


Input Format
First and only argument is a list containing N head pointers.


Output Format
Return a pointer to the head of the sorted linked list after merging all the given linked lists.


Example Input
Input 1:
 1 -> 10 -> 20
 4 -> 11 -> 13
 3 -> 8 -> 9
Input 2:
 10 -> 12
 13
 5 -> 6
   


Example Output
Output 1:
 1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20
Output 2:
 5 -> 6 -> 10 -> 12 ->13
   


Example Explanation
Explanation 1:
 The resulting sorted Linked List formed after merging is 1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20.
Explanation 2:
 The resulting sorted Linked List formed after merging is 5 -> 6 -> 10 -> 12 ->13.
 */


//   Definition for singly-linked list.
class ListNode {
    public int val;
    public ListNode next;
    ListNode(int x) { val = x; next = null; }
}
 
class CustomMinHeap{
    private ArrayList<ListNode> heap;
 
    private void swap(int i, int j){
        ListNode t = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, t);
    }
 
    private void downHeapify(int root){
        int len = heap.size();
        if(root >= len){
            return;
        }
        int l = root * 2 + 1;
        int r = root * 2 + 2;
        int min = root;
 
        if(l < len && heap.get(l).val < heap.get(min).val){
            min = l;
        }
 
        if(r < len && heap.get(r).val < heap.get(min).val){
            min = r;
        }
 
        if(root != min){
            swap(root, min);
            downHeapify(min);
        }
    }
 
    private void upHeapify(int node){
        int len = heap.size();
 
        if(node >= len){
            return;
        }
 
        int p = (node - 1) / 2;
 
        if(heap.get(node).val < heap.get(p).val){
            swap(node, p);
            upHeapify(p);
        }
    }
 
    public void add(ListNode node){
        heap.add(node);
        upHeapify(heap.size() - 1);
    }
 
    public ListNode remove(){
        int last = heap.size() - 1;
        if(last+1 > 0){
            ListNode retVal = heap.get(0);
            heap.set(0, heap.get(last));
            heap.remove(last);
            downHeapify(0);
            return retVal;
        }else{
            return new ListNode(-1);
        }
    }
 
    public boolean empty(){
        return heap.size() == 0;
    }
 
    public CustomMinHeap(){
        heap = new ArrayList<ListNode>();
    }
}
public class Solution {
    public ListNode mergeKLists(ArrayList<ListNode> a) {
        int K = a.size();
        CustomMinHeap heap = new CustomMinHeap();
        for(int i = 0; i < K; ++i){
            heap.add(a.get(i));
        }
        
        ListNode head = heap.remove();
        if(head.next != null){
            heap.add(head.next);
        }
        ListNode curr = head;
 
        while(!heap.empty()){
            ListNode node = heap.remove();
            if(node.next != null){
                heap.add(node.next);
            }
            curr.next = node;
            curr = node;
        }
        return head;
    }
}
