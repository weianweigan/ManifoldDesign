---
title: User maunal
icon: markdown
order: 2
category:
  - Help
tag:
  - Markdown
---

# 1. Introduction

## 1-1. Purpose of writing

&emsp;&emsp;This user's manual is written to help users understand and operate the hydraulic valve block design software (TouchMDesign) faster.

## 1-2. Reading Suggestions

&emsp;&emsp;Read for all engineers who are using or will be using the software.

&emsp;&emsp;The software is based on the SolidWorks platform developed for hydraulic valve block design software, which firstly requires the reader to be familiar with the basic operation of SolidWorks software, and secondly requires the reader to be familiar with the business process and professional knowledge of the hydraulic valve block design process.

&emsp;&emsp; Based on the above conditions, the user can better learn and use this software system.

## 1-3. System Introduction

![](/images/28330553.png)

-Customized development based on Solidworks software, using Solidworks interface style, easy to use.

-To realize the intelligent design, adjustment, checking, drawing, assembly and BOM functions of valve block oil circuit in 3D environment, to improve the design efficiency and quality.

>&emsp;&emsp;TouchMDesign is a powerful hydraulic integrated block auxiliary design software independently developed by Toppan. It can be perfectly integrated in SOLIDWORKS environment without any difference to design, adjust, check, and generate related engineering drawing documents.

&emsp;&emsp;Through a professional document generation, including custom hole cavity features, hole cavity adsorption adjustment, gap checking, automatic dimensioning of engineering drawings, etc., it makes the original complex integration design both fast and easy, and also avoids errors.

&emsp;&emsp;Effective design tools can be provided to reduce your design time, and two cavities can be easily joined using effective cavity joining features.

+ Perfect integration with Solidworks software
+ True full 3D interface
+ Easy-to-learn, smart operation
+ Fast addition of various valve holes
+ Flexible hole layout methods
+ Intelligent connection methods
+ Quick design modifications
+ Quality check and assurance
+ Fast 2D engineering drawings
+ Automatic assembly of components

# 2. Basic knowledge

## Definition of Hole Cavity

All types of holes in an integrated block are called cavities.
A single hole cavity may be a drilled hole, a plug hole (SAE port, BSP port, NPT port, etc.), a cartridge valve cavity, a bolt hole, and a locating pin hole.
Orifice cavity multi-hole is a combination of single holes, divided into plate valve holes, flange holes, common combination holes, two-way cartridge valve holes.

### Orifice cavity step
The profile of an orifice cavity is made up of its step size and the number of steps. Where each step is made up of a cylinder and a cone, the step information is similar to a drill with a drill diameter, a drill depth and a taper angle at the bottom of the drill.

![](/images/28415304.png)

**Note:**

1. if there is a countersink step, the depth reference for the later steps, except for the bottom hole (the last step hole), are referenced to the bottom surface of the countersink.
2. all bottom hole depth dimensions (last stepped hole) are referenced to the surface.

![](/images/28402763.png)

**Note:**

1. when the angle = 90°, it is the bottom of the hole is a flat bottom.
2. when depth = 0, then the profile is only angular.

### Bolt hole

Three types of bolt holes used in valve block design
- Threaded bolt holes (for mounting parts on the block and for mounting the block) - metric or imperial threads can be used
- Through bolt holes - can be drilled directly through using "Drilling
- Through bolt holes with countersunk holes (for mounting blocks) - available with "Through bolt holes
![](/images/28415392.png)

## Definition of slant holes

For compact blocks with a minimum number of cross holes, the usual viable option is to use angled drilling.
TouchMDesign software can model and visualize angled holes as well as drill them.

```
The α-angle is the angle of rotation of an angled hole on a surface.
Angle holes with 0, 90, 180 or 270 α angles are called simple angle holes.
Angular holes with an angle other than 0, 90, 180, or 270 are called compound angular holes.

Beta angle (Beta) is the angle hole that is inclined to the surface normal.
The α and β angle values are entered in the Edit Hole Cavity dialog box.
```

![](/images/25498984.png)

**α - rotate on the surface**

![](/images/25499000.png)

**β - angle normal to the surface**

### Each view uses the α angle convention

![](/images/25498586.png)

**Note: Angular hole depth is the depth along the axis of the angular hole. **

## Definition of hole cavity position reference

When inserting a hole cavity, the position of the hole cavity needs to be defined. In TouchMDesign software, the following types of hole cavity positioning reference objects can be selected

```
1. point - any sketch point in space, any entity vertex in space, the midpoint of the entity edge
Binding relationship: the hole cavity center positioning point will be aligned with the selected reference point, overlap or XY direction or marked with the corresponding distance.
2. Straight line - any sketch line in space, any solid edge line in space
Constraint relationship: the center of the hole cavity will be positioned with the selected reference line, overlap or marked with the corresponding distance.
3. Arc - the arc edge of the solid contour of the hole cavity
Binding relationship: the center of the hole cavity will be positioned with the selected reference arc, concentric or coincident or marked with the corresponding distance.
4. Face - the cylindrical surface of the hole cavity contour
Binding relationship: the center of the hole cavity will be positioned with the selected reference cylindrical surface center axis, concentric or marked with the corresponding distance.
```

**Note: The selection of the above bore cavity positioning reference objects, please combine reasonably according to the design intent, will help improve the quality of the valve block design and the speed of adjustment**

## Simplicity in processing of hole cavity contour dimensions

- Simple display of cavity contour dimensions
- Avoid the visual distraction of unnecessary dimensions
- Easier and more convenient to modify dimensions
- Clicking on any cavity will quickly display the diameter and depth of the cavity, making it easy for the user to make quick changes
![](/images/28449452.png)
![](/images/28449455.png)

# 3. Function operation

## 3-1. Function menu

[Part design environment
![](/images/28449513.png)
[Assembly design environment
![](/images/28449516.png)
Design environment for engineering drawings
![](/images/28449524.png)
Hole cavity library function menu
![](/images/28449562.png)

## 3-2. block

### 3-2-1. Function description

Mainly implement the definition of the block body length, width and height dimensions to create block features, or edit and modify the created block length, width and height dimensions
Prefabricated conditions: you need to use this function to create a block after creating a new part through Solidworks
Applicable environment: Part environment.

### 3-2-2. Function interface

![](/images/28449668.png)

### 3-2-3. Operation method

1、TouchMDesign > Block, the Create Block dialog box is displayed (as above)
2, manually enter the required dimensions of the design block
- H Height of the integrated block
- L Length of the block
- W Block width

![](/images/28449818.png)

3、After finishing inputting data, click √
4、The software will automatically create block features according to the defined length, width and height dimensions

![](/images/24940689.png)

5、In the case of created blocks, click the "Block" command again, you will be able to edit the dimensions of the block

**Tips:**
*TouchMDesign uses the following model size names to define the dimensions of the block: block length (L), block height (H) and block width (W), do not change the names of these parameters, if you change the names of these parameters, TouchMDesign modify the block dimensions will appear unpredictable results. *# 3-3.

## 3-3. Inserting a single hole

### 3-3-1. Function Description

It mainly realizes inserting the selected hole cavity feature on the existing block, and the hole cavity is a single hole feature.
Applicable environment: Part environment
Environment: part environment.

### 3-3-2. Function interface

![](/images/24941260.png)

### 3-3-3. Operation method

1、From the list of hole cavity library, double click to select a hole cavity (single hole), the corresponding interface will pop up in the SW property page.

2、Select the placement surface of the hole cavity, i.e. the surface of the valve block, and the hole cavity preview and position coordinate system will be presented automatically.

![](/images/24941651.png)

3、You can directly drag the position coordinate system to move the orifice cavity to the appropriate position.

![](/images/24941659.png)

4、The position of the hole cavity can be defined directly by selecting the position reference, the selectable reference types are: point, line, surface, hole cavity.

Note: The choice of position reference, there are a variety of combinations of cases, see "Basics" page "position reference definition".

The coordinate value in the position, + value means it is in line with the reference axis, - value means it is in line with the reference axis.

![](/images/24941700.png)

5, "Constrain" and "Unconstrained" check box, used to define whether to use Solidworks geometric constraints or dimensional constraints to define the hole cavity position after the creation of the hole cavity.

![](/images/24941706.png)

6. Define the cavity "dimensions"

6.1 Define the diameter of the bottom hole of the cavity and modify the diameter value directly.

![](/images/24941496.png)

6.2 Define the depth of the bottom hole of the cavity, there are 3 ways to define the depth

a) Select "Given depth" to define the depth of the cavity directly.

![!](/images/24941490.png)

b) select "Full penetration", the cavity depth will be directly through the valve block.

![](/images/24941523.png)

c) select "Form to cavity", the cavity depth will be stretched to the center axis of the selected cavity by default.

If "Stretch over cavity" is checked, the cavity depth will be stretched beyond the diameter of the selected cavity.

![](/images/24941566.png)

7. "Show all dimensions" checkbox, if checked, all cavity dimensions will be retained after the cavity feature is created, if unchecked, only the bottom hole diameter depth and countersink diameter depth (if any) will be retained after the cavity feature is created.

![](/images/24941717.png)

**Tips:**

*If the first reference is a cavity when defining the position, the cavity depth is automatically switched to the "Stretch to cavity" option and stretched to the selected reference cavity. *# 3-4.

## 3-4. Inserting Multiple Holes

### 3-4-1. Function Description

The main function is to insert the selected hole cavity feature into the existing block, and the hole cavity is a multi-hole feature.
Applicable environment: part environment.

### 3-4-2. Function interface

![](/images/24941927.png)

### 3-4-3. Operation method

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

## 3-5. Tension block

### 3-5-1. Functional description

It mainly realizes the adjustment of the designed block size, including the adjustment of the hole cavity depth size associated with this block size adjustment.
Applicable environment: part environment.

### 3-5-2. Function interface
