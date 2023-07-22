## 3-3. Inserting Multiple Holes

### 3-3-1. Function Description

The main function is to insert the selected hole cavity feature into the existing block, and the hole cavity is a multi-hole feature.
Applicable environment: part environment.

### 3-3-2. Function interface

![](/images/24941927.png)

### 3-3-3. Operation method

1. From the list of hole cavity library, double click to select a hole cavity (multi-hole), the corresponding interface will pop up in the SW property page.

2. Select the placement surface of the hole cavity, i.e. the surface of the valve block, and the hole cavity preview and position coordinate system will be presented automatically.

![](/images/24941651.png)
3. 、You can directly drag the position coordinate system to move the orifice cavity to the appropriate position.

![](/images/24941963.png)
4. The position of the hole cavity can be defined directly by selecting the position reference, the selectable reference types are: point, line, surface, hole cavity.

Note: The choice of position reference, there are a variety of combinations of cases, see the "Basics" page of "position reference definition".

![](/images/24941700.png)

5. Click once on the "Rotate Hole Cavity" command, which will rotate 90° counterclockwise.

![](/images/24944415.png)

6. "Constrain" and "Unconstrained" check box, used to define whether to use geometric constraints or dimensional constraints to define the hole cavity position after the creation of the hole cavity.

![](/images/24941706.png)

7. "Hole cavity list" page shows the information of each single hole in the current multi-hole, i.e., the name of the single hole and its corresponding relative position, which can be checked to compress the single hole when a hole cavity is generated.

![](/images/24944423.png)

8. The "Size" page shows the size information of the single hole selected in the "Hole cavity list" page, that is, each single hole can define its bottom hole diameter and bottom hole depth independently, by switching between the "Hole cavity list "hole cavity list" in the switch to select the hole cavity can be.

9. Define the "size" of the hole cavity
  - 9.1 Define the bottom hole diameter of the hole cavity and modify the diameter value directly.

![](/images/24941496.png)

  - 9.2 Define the depth of the bottom hole of the cavity, there are 3 ways to define the depth

     a) Select "Given depth" to define the depth of the cavity directly.

![!](/images/24941490.png)

    b) select "Full penetration", the depth of the cavity will be directly through the valve block.

![](/images/24941523.png)

    c) select "Form to cavity", the cavity depth will be stretched to the center axis of the selected cavity by default.
    
If "Stretch over cavity" is checked, the cavity depth will be stretched beyond the diameter of the selected cavity.

![](/images/24941566.png)

10. "Show all dimensions" checkbox, if checked, all cavity dimensions will be retained after creating the cavity feature, if unchecked, only the bottom hole diameter depth and countersink diameter depth (if any) will be retained after creating the cavity feature.
![](/images/24941717.png)