import java.util.List;
import java.util.ArrayList;

public class Tree<T> {
    public Node<T> root;

    public Tree(T rootData) {
        root = new Node<T>(rootData,null);
    }
        
    public static class Node<T> {
        public T data;
        private Node<T> parent;
        private List<Node<T>> children;
        
        public Node(T data, Node<T> parent){
            this.data = data;
            this.parent = parent;
            children = new ArrayList<>();
        }
        public Node<T> addChild(T data){
            Node<T> child = new Node<T>(data,this);
            children.add(child);
            return child;
        }
        public Node<T> getChild(int i){
            return children.get(i);
        }
        public List<Node<T>> getChildren(){
            return children;
        }
    }
}